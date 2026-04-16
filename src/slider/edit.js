import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
  RichText,
} from "@wordpress/block-editor";
// import { PanelBody, ColorPicker } from "@wordpress/components";
import { PanelColorSettings } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ["create-block/video-testimonial-slide"];

const TEMPLATE = [
  ["create-block/video-testimonial-slide", {}],
  ["create-block/video-testimonial-slide", {}],
  ["create-block/video-testimonial-slide", {}],
];

export default function Edit({ attributes, setAttributes }) {
  const { sectionTitle, accentColor, playIconColor,
  playBgColor,
  navHoverBg,
  navHoverColor } = attributes;

  const blockProps = useBlockProps({
    className: "testimonial-section-editor",
    style: {
      "--accent": accentColor,
      "--play-icon": playIconColor,
      "--play-bg": playBgColor,
      "--nav-hover-bg": navHoverBg,
      "--nav-hover-color": navHoverColor
    }
  });

  return (
    <>
      <InspectorControls>
        {/* <PanelBody title={__("Settings", "video-testimonial-slider")}>
          <p><strong>{__("Accent Color", "video-testimonial-slider")}</strong></p>
          <p style={{ fontSize: "12px", color: "#666" }}>
            Used for nav buttons and play icon.
          </p>
          <ColorPicker
            color={accentColor}
            onChange={(val) => setAttributes({ accentColor: val })}
            enableAlpha={false}
          />
          <p><strong>Play Button Icon Color</strong></p>
          <ColorPicker
            color={playIconColor}
            onChange={(val) => setAttributes({ playIconColor: val })}
            enableAlpha={false}
          />

          <p><strong>Play Button Background</strong></p>
          <ColorPicker
            color={playBgColor}
            onChange={(val) => setAttributes({ playBgColor: val })}
            enableAlpha={false}
          />

          <p><strong>Nav Hover Background</strong></p>
          <ColorPicker
            color={navHoverBg}
            onChange={(val) => setAttributes({ navHoverBg: val })}
            enableAlpha={false}
          />

          <p><strong>Nav Hover Color</strong></p>
          <ColorPicker
            color={navHoverColor}
            onChange={(val) => setAttributes({ navHoverColor: val })}
            enableAlpha={false}
          />
        </PanelBody> */}
        <>
          <PanelColorSettings
            title="Play Button Colors"
            initialOpen={true}
            colorSettings={[
              {
                label: 'Background',
                value: playBgColor,
                onChange: (value) => setAttributes({ playBgColor: value })
              },
              {
                label: 'Icon',
                value: playIconColor,
                onChange: (value) => setAttributes({ playIconColor: value })
              }
            ]}
          />

          <PanelColorSettings
            title="Navigation Colors"
            initialOpen={false}
            colorSettings={[
              {
                label: 'Accent',
                value: accentColor,
                onChange: (value) => setAttributes({ accentColor: value })
              },
              {
                label: 'Hover Background',
                value: navHoverBg,
                onChange: (value) => setAttributes({ navHoverBg: value })
              },
              {
                label: 'Hover Icon',
                value: navHoverColor,
                onChange: (value) => setAttributes({ navHoverColor: value })
              }
            ]}
          />
        </>
      </InspectorControls>

      <div {...blockProps}>
        {/* Header */}
        <div className="testimonial-header">
          <RichText
            tagName="h2"
            value={sectionTitle}
            onChange={(val) => setAttributes({ sectionTitle: val })}
            placeholder={__("Enter section title...", "video-testimonial-slider")}
            style={{ fontSize: "36px", fontWeight: "700", margin: "0" }}
          />
          {/* Nav buttons preview */}
          <div
            className="nav-btns"
            style={{ "--accent": accentColor }}
          >
            <div
              className="nav-preview-btn"
              style={{ border: `2px solid ${accentColor}`, color: accentColor }}
            >
              ›
            </div>
            <div
              className="nav-preview-btn"
              style={{ border: `2px solid ${accentColor}`, color: accentColor }}
            >
              ‹
            </div>
          </div>
        </div>

        {/* Slides */}
        <div className="slides-editor-wrapper">
          <InnerBlocks
            allowedBlocks={ALLOWED_BLOCKS}
            template={TEMPLATE}
            orientation="horizontal"
          />
        </div>

        <p style={{ textAlign: "center", fontSize: "11px", color: "#aaa", marginTop: "10px" }}>
          🎬 Add or remove Video Testimonial Slide blocks above
        </p>
      </div>
    </>
  );
}