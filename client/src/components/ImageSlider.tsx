import "./ImageSlider.css";

export default function ImageSlider() {
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
  ];

  return (
    <div style={{ overflow: "hidden", width: "100%", padding: "40px 0" }}>
      <div className="force-slider">
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            style={{
              width: "280px",
              height: "200px",
              flexShrink: 0,
              borderRadius: "16px",
              overflow: "hidden",
              marginRight: "24px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={src}
              alt="gallery"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}