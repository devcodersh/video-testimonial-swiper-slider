import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { sectionTitle, accentColor, playIconColor, playBgColor, navHoverBg, navHoverColor } = attributes;

  const blockProps = useBlockProps.save({
    className: "testimonial-section",
    style: {
      "--accent": accentColor,
      "--play-icon": playIconColor,
      "--play-bg": playBgColor,
      "--nav-hover-bg": navHoverBg,
      "--nav-hover-color": navHoverColor
    }
  });

  return (
    <section {...blockProps}>
      {/* Header */}
      <div className="testimonial-header">
        <RichText.Content
          tagName="h2"
          value={sectionTitle}
        />
        <div className="nav-btns">
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>

      {/* Swiper */}
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <InnerBlocks.Content />
        </div>
      </div>
    </section>
  );
}