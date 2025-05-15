import { useParams, useNavigate } from "react-router-dom";
import { products } from "../date/product.js";
import { useCart } from "../context/cartContext.jsx";

export default function ProductsDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const styles = {
        container: {
            maxWidth: "900px",
            margin: "60px auto",
            padding: "40px",
            boxShadow: "0 8px 24px rgba(224, 28, 28, 0.84)",
            borderRadius: "16px",
            backgroundColor: "#ffffff",
            fontFamily: "'Segoe UI', sans-serif",
            textAlign: "center",
            transition: "transform 0.3s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        image: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "12px",
            marginBottom: "30px",
            boxShadow: "0 4px 12px rgb(221, 218, 42)",
        },
        name: {
            fontSize: "2.3rem",
            marginBottom: "20px",
            color: "#333",
            fontWeight: "600",
        },
        description: {
            fontSize: "1.15rem",
            marginBottom: "25px",
            color: "#555",
            lineHeight: "1.6",
            maxWidth: "750px",
        },
        price: {
            fontSize: "1.4rem",
            fontWeight: "bold",
            color: "#28a745",  // Slightly brighter green for price
            marginBottom: "30px",
        },
        button: {
            padding: "14px 30px",
            fontSize: "1.1rem",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        },
        buttonHover: {
            backgroundColor: "#45a049",  // Slightly darker green on hover
            transform: "scale(1.05)",  // Grows slightly when hovered
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.name}>{product.name}</h2>
            <img src={product.image} alt={product.name} style={styles.image} />
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>₹{product.price}</p>
            <button
                style={styles.button}
                onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                onMouseDown={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
