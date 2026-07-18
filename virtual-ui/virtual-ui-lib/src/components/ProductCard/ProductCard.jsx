import React, { useState } from "react";

export const ProductCard = ({
  image = "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80",
  title = "Wireless Headphones",
  description = "Premium sound quality with active noise cancellation",
  price = 199.99,
  currency = "$",
  rating = 4.5,
  accent = "#6366f1",
  bg = "#0f172a",
  onAddToCart = () => {},
  onQuickView = () => {}
}) => {
  const [hovered, setHovered] = useState(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} style={{ color: "#fbbf24" }}>★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" style={{ color: "#fbbf24" }}>★</span>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} style={{ color: "rgba(255,255,255,0.2)" }}>★</span>);
    }
    
    return stars;
  };
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bg,
        borderRadius: "16px",
        overflow: "hidden",
        width: "280px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 10px 30px rgba(0,0,0,0.4)" : "0 4px 15px rgba(0,0,0,0.2)"
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "220px" }}>
        <img 
          src={image} 
          alt={title} 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s ease"
          }} 
        />
        <div style={{ 
          position: "absolute", 
          top: "12px", 
          right: "12px", 
          background: "rgba(0,0,0,0.7)",
          padding: "4px 10px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: "700",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          gap: "4px"
        }}>
          {renderStars()}
          <span style={{ marginLeft: "2px" }}>{rating}</span>
        </div>
        <button
          onClick={onQuickView}
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            padding: "6px 16px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.9)",
            border: "none",
            color: "#000",
            fontSize: "12px",
            fontWeight: "600",
            cursor: "pointer",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.2s"
          }}
        >
          Quick View
        </button>
      </div>
      
      <div style={{ padding: "16px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", margin: "0 0 8px" }}>{title}</h3>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", margin: "0 0 12px", lineHeight: 1.5 }}>{description}</p>
        
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <div style={{ fontSize: "20px", fontWeight: "800", color: "#fff" }}>
            {currency}{price.toFixed(2)}
          </div>
          <button
            onClick={onAddToCart}
            style={{
              padding: "8px 16px",
              borderRadius: "10px",
              border: "none",
              background: hovered ? "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")" : alpha(accent, 0.15),
              color: hovered ? "#fff" : accent,
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};