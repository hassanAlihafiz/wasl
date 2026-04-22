interface BrandMarkProps {
  height?: number;
  width?: number;
  alt?: string;
}

export default function BrandMark({ height = 42, width, alt = "Wasl logo" }: BrandMarkProps) {
  return (
    <div>
      <img
        src="/WaslLogo-Web.png"
        alt={alt}
        style={{
          height: `${height}px`,
          width: width ? `${width}px` : "auto",
          display: "block",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
