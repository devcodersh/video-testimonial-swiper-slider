import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  RangeControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { videoUrl, authorName, authorRole, description, rating, accentColor } = attributes;

  const blockProps = useBlockProps({
    className: "swiper-slide vts-slide-editor",
  });

  const stars = Array.from({ length: 5 }, (_, i) =>
    i < rating ? "★" : "☆"
  ).join("");

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Video", "video-testimonial-slider")}>
          <TextControl
            label={__("Video URL (.mp4)", "video-testimonial-slider")}
            value={videoUrl}
            onChange={(val) => setAttributes({ videoUrl: val })}
            placeholder="https://example.com/video.mp4"
            help={__("Paste a direct .mp4 video URL", "video-testimonial-slider")}
          />
        </PanelBody>
        <PanelBody title={__("Rating", "video-testimonial-slider")}>
          <RangeControl
            label={__("Stars", "video-testimonial-slider")}
            value={rating}
            onChange={(val) => setAttributes({ rating: val })}
            min={1}
            max={5}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="video-wrapper">
          {/* Video preview */}
          {videoUrl ? (
            <video src={videoUrl} muted style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div className="vts-video-placeholder">
              <span>🎬</span>
              <small>{__("Paste video URL in sidebar →", "video-testimonial-slider")}</small>
            </div>
          )}

          {/* Play btn preview */}
          <div className="play-btn" style={{ pointerEvents: "none" }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" fill={accentColor}>
              <path d="M361 215C375.2 223.2 384 238.1 384 254.1s-8.75 30.9-23 39L87 473c-14.4 8.1-32 7.9-46.2-.5S0 450.4 0 433.1V78.9C0 61.6 9.75 45.6 24 37.1S72.6 31.9 87 40.1L361 215z" />
            </svg>
          </div>

          {/* Card content */}
          <div className="card-content">
            <div className="stars">{stars}</div>
            <RichText
              tagName="h3"
              value={authorName}
              onChange={(val) => setAttributes({ authorName: val })}
              placeholder={__("Author Name", "video-testimonial-slider")}
            />
            <RichText
              tagName="p"
              className="role"
              value={authorRole}
              onChange={(val) => setAttributes({ authorRole: val })}
              placeholder={__("Job Title / Role", "video-testimonial-slider")}
            />
            <RichText
              tagName="p"
              className="desc"
              value={description}
              onChange={(val) => setAttributes({ description: val })}
              placeholder={__("Write testimonial description...", "video-testimonial-slider")}
            />
          </div>
        </div>
      </div>
    </>
  );
}