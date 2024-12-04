"use client";

import Icon, { IconTypes } from "@/app/_components/Icon/Icon";
import styles from "./DownloadButton.module.scss";

export interface DownloadButtonProps {
  handleDownloadClick: () => void;
}

export default function DownloadButton({
  handleDownloadClick,
}: DownloadButtonProps) {
  return (
    <button
      className={styles["DownloadButton"]}
      onClick={() => handleDownloadClick()}
    >
      <Icon type={IconTypes.DOWNLOAD} />
    </button>
  );
}
