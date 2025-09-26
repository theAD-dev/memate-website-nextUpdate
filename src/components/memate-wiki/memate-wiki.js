import React, { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import { wikiBase, wikiBaseBSearch } from "../../api/wikiApi"; 
import "./style.css";
import style from './wiki.module.scss';
import Link from "next/link";
// import { Helmet } from "react-helmet-async";
import { Oval } from 'react-loader-spinner';
const FilterIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/search-filter.svg";

const MemateWiki = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const { data: wikiData = [], isLoading: initialLoading } = useQuery({
    queryKey: ['wikiBase'],
    queryFn: wikiBase,
    enabled: true,
  });
  const fetchFilteredData = async () => {
    if (searchQuery.trim() !== "") {
      setIsLoading(true);
      setError(null); 
      try {
        const result = await wikiBaseBSearch(searchQuery);
        setFilteredData(result);
      } catch (error) {
        console.error("Error fetching filtered data:", error);
        setError("Failed to fetch data. Please try again.");
        setFilteredData([]);
      } finally {
        setIsLoading(false);
      }
    } else {
      setFilteredData(wikiData);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchFilteredData();
    }, 300); 

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, wikiData, fetchFilteredData]);


  return (
    <>
    <div className={`${style.mainMenuPages} ${style.ResourcesPages}`}>
    <div className={`titleHead ${style.mainHeadTitle}`}>
          <h2>memate <br />wiki</h2>
          <h1 className="h1tagsseow">Business Tips & Insights for Aussie SMEs | MeMate Wiki</h1><span>
          </span>
          <h4>
          Here, we gather valuable knowledge about general business<br/> management practices and tools, from job scheduling to<br/> invoicing and quote calculations.
          </h4>
        <div className={style.searchFilterList}>
        <img style={{height: "23px", width: "23px"}} src={FilterIcon} alt='filter Icon' />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={style.searchInput}/>
        </div>
      </div>
      <div className={style.mainwikiMibile}>
        {initialLoading || isLoading ? (
          <p className='loaderBarCircle'>
          <Oval
          visible={true}
          height={40}
          width={40}
          color="#1ab2ff"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
          /></p>
        ) : error ? (
          <p className={style.errorMessage}>{error}</p>
        ) : (
          (filteredData || []).map((item, index) => (
            
            <div key={index} className={style.mainGridWrap}>
              <div className={style.inHead}>
                <h2>{item?.name || "Unknown Category"}</h2>
              <Link 
                href={{
                  pathname: `/memate-wiki/${item.slug}`,
                  state: { 
                    categoryName: item.name,
                    categoryId: item.id,
                    titleSlug: item.slug,
                    cameta_title: item.meta_title,
                    cameta_description: item.meta_description,
                    cah1: item.h1,
                    cah2: item.h2,
                  }
                }}
                className={style.viewAllLink}>
                View All
              </Link>

              </div>
             {item.subdata && item.subdata.length > 0 && (
  <div className={style.mainGridwtapFlex}>
    {item.subdata.map((subcategory) => (
      <div className={`itemFlex ${subcategory.id} ${style.itemFlex}`} key={subcategory.id}>
      <Link
        key={subcategory.id}
        href={{
          pathname: `/memate-wiki/${item.slug}/${subcategory.slug}`,
          state: { 
            id: subcategory.id, 
            slug: subcategory.slug, 
            Slug: item.slug,
            name: subcategory.name, 
          }
              }}>
              <div className={style.itemText}>
                {subcategory.title}
              </div>
            </Link>
            </div>
          ))}
        </div>
      )}
        </div>
          ))
        )}
      </div>
    </div>
    </>
  );
};

export default MemateWiki;
