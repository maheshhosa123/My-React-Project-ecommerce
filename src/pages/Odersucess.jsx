import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#121212",  // Dark background for neon colors to pop
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif"
        },
        title: {
            fontSize: "3rem",
            color: "#39FF14", // Neon green color
            marginBottom: "20px",
            textShadow: "0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14", // Neon glow effect
        },
        message: {
            fontSize: "1.5rem",
            color: "#fff", // White text for readability
            marginBottom: "30px",
            textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff2a68", // Soft white glow with a pink hint
        },
        button: {
            padding: "14px 28px",
            fontSize: "1.1rem",
            backgroundColor: "#ff2a68", // Neon pink color
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
            textDecoration: "none",
            boxShadow: "0 0 10px #ff2a68, 0 0 20px #ff2a68, 0 0 30px #ff2a68", // Neon glow for the button
        },
        buttonHover: {
            backgroundColor: "#e11d55", // Slightly darker neon pink on hover
            transform: "scale(1.05)", // Button grows a bit on hover
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us.</p>
            <a
                href="/"
                style={styles.button}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                onMouseDown={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
                Go to Home
            </a>
        </div>
    );
}
