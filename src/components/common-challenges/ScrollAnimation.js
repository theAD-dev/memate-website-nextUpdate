export default function ScrollAnimation() {
  const images = Array(6).fill(
    "https://memate-website.s3.ap-southeast-2.amazonaws.com/fffff_f9uwhw.png"
  );

  return (
    <div className="gridboxstreamline item1">
      <div className="bg-scroll">
        <div className="scroll-track">
          {[...images, ...images].map((img, index) => (
            <img key={index} src={img} className="bg-img" alt="" />
          ))}
        </div>
      </div>
       <h4>A system designed for complete <br />control over business activities</h4>
    </div>
  );
}
