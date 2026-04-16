import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { videoUrl, authorName, authorRole, description, rating, accentColor } = attributes;

  const blockProps = useBlockProps.save({
    className: "swiper-slide",
  });

  const stars = Array.from({ length: 5 }, (_, i) =>
    i < rating ? "★" : "☆"
  ).join("");

  return (
    <div {...blockProps}>
      <div className="video-wrapper">
        <video
          src={videoUrl}
          muted
          controlsList="nodownload"
          poster=""
        />

        <button className="play-btn" aria-label="Play video">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" fill={accentColor}>
            <path d="M361 215C375.2 223.2 384 238.1 384 254.1s-8.75 30.9-23 39L87 473c-14.4 8.1-32 7.9-46.2-.5S0 450.4 0 433.1V78.9C0 61.6 9.75 45.6 24 37.1S72.6 31.9 87 40.1L361 215z" />
          </svg>
        </button>

        <div className="card-content">
          <div className="stars">{stars}</div>
          <RichText.Content tagName="h3" value={authorName} />
          <RichText.Content tagName="p" className="role" value={authorRole} />
          <RichText.Content tagName="p" className="desc" value={description} />
        </div>
      </div>
    </div>
  );
}