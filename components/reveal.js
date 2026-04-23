"use client";

export function Reveal({ as: Tag = "div", className = "", children }) {
  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
}
