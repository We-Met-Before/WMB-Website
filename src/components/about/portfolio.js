import ExportedImage from "next-image-export-optimizer";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Portfolio({ portfolioItems }) {
  useEffect(() => {
    console.log({ portfolioItems });
  }, [portfolioItems]);
  return (
    <section id="anchorWork" className="mbPortfolio">
      {portfolioItems.length > 0 && (
        <ul className="mbPortfolioList">
          {portfolioItems.map((item, index) => (
            <li className="mbPortfolioItem" key={index}>
              <Link className="mbPortfolioItem_link" href={item.url ? item.url : ''} target="_blank">
                <div className="mbPortfolioItem_link">
                  <div className="mbPortfolioItem_imageWrapper">
                    <ExportedImage src={item.image} width={300} height={300} className="mbPortfolioItem_image" alt={item.name} />
                  </div>
                  <div className="mbPortfolioItem_content">
                    <h4 className="mbPortfolioItem_title">{item.name}</h4>
                    {item.url && <span className="mbPortfolioItem_arrow">↗</span>}
                  </div>
                  <p className="mbPortfolioItem_excerpt">{item.role}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
