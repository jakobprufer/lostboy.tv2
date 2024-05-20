import React, { Fragment } from "react";

interface SanityNode {
  _key: string;
  asset: {
    _ref: string;
  };
  caption?: string;
}

interface VideoPlayerProps {
  value: SanityNode;
}

const AudioPlayer: React.FC<VideoPlayerProps> = ({ value }) => {
  const id = value._key;
  const { _ref: ref } = value.asset;
  const assetRefParts = ref.split("-"); // ["file", "ff7...", "mp3"]
  const index = assetRefParts[1]; // "ff7..."
  const format = assetRefParts[2]; // "mp3"
  const source = `https://cdn.sanity.io/files/vlugq6ei/production/${index}.${format}`;
  return (
    <Fragment>
      <video controls className="detailContentVideo">
        <source src={source} type="video/mp4" />
      </video>
      {value.caption && <div className="pLabel">{value.caption}</div>}
    </Fragment>
  );
};

export default AudioPlayer;
