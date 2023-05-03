import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

const CSS_HANDLES = [
  "main-item",
  "static-background",
  "background-masker",
  "btn-divide-left",
  "animated-background",
  "background-masker",
  "btn-divide-left",
  "shared-dom",
  "sub-rect",
  "pure-background",
  "css-dom"
]

export default function Loading() {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    <div className={`${handles["main-item"]}`}>

      <div className={`${handles["animated-background"]}`}></div>

      <div className={`${handles["shared-dom"]}`}>
        <div className={`${handles["sub-rect"]} ${handles["pure-background"]}`}></div>
        <div className={`${handles["sub-rect"]} ${handles["pure-background"]}`}></div>
        <div className={`${handles["sub-rect"]} ${handles["pure-background"]}`}></div>
        <div className={`${handles["sub-rect"]} ${handles["pure-background"]}`}></div>
        <div className={`${handles["sub-rect"]} ${handles["pure-background"]}`}></div>
        <div className={`${handles["sub-rect"]} ${handles["pure-background"]}`}></div>
        <div className={`${handles["sub-rect"]} ${handles["pure-background"]}`}></div>
        <div className={`${handles["sub-rect"]} ${handles["pure-background"]}`}></div>
        <div className={`${handles["sub-rect"]} ${handles["pure-background"]}`}></div>
        <div className={`${handles["sub-rect"]} ${handles["pure-background"]}`}></div>
      </div>

    </div>
  )
}

