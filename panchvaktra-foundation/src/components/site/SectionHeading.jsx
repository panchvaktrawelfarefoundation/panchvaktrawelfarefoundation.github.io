export default function SectionHeading({ eyebrow, title, intro, align = "left", tone = "light" }) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={`eyebrow ${tone === "dark" ? "text-gold" : ""}`}>{eyebrow}</p>
      )}
      <h2
        className={`mt-3 text-3xl leading-[1.15] sm:text-[40px] ${
          tone === "dark" ? "text-background" : "text-forest"
        }`}
      >
        {title}
      </h2>
      <div className={`rule-gold mt-5 ${centered ? "mx-auto" : ""}`} />
      {intro && (
        <p
          className={`mt-5 text-[15.5px] leading-relaxed ${
            tone === "dark" ? "text-background/75" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}