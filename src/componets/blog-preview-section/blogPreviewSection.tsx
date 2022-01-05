import BlogPostPreview from "./blogPostPreview";

const PREVIEWDATA = [
  {
    title: "NUNC VOLUTPAT VENENATIS",
    meta: "May 9, 2014 | Category | 4 Comments",
    text: "Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Ut faucibus fringilla semper. Aenean nunc ex,..",
    img: "/morvanic-lee-GiUJ02Yj_io-unsplash.jpg",
    onLink:
      "https://unsplash.com/s/photos/randoms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    byLink:
      "https://unsplash.com/@morvanic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyTex",
    imgLinkText: "Morvanic Lee",
  },
  {
    title: "VESTIBULUM NISL FELIS",
    meta: "May 9, 2014 | Category | 5 Comments",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque. Aenean vitae erat velit.",
    img: "/sharon-pittaway-iMdsjoiftZo-unsplash.jpg",
    onLink:
      "https://unsplash.com/s/photos/randoms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    byLink:
      "https://unsplash.com/@sharonp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    imgLinkText: "Sharon Pittaway",
  },
  {
    title: "PROIN EU AUGUE EFFICITUR",
    meta: "May 9, 2014 | Category | 3 Comments",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque. Aenean vitae erat velit.",
    img: "/al-ghazali-3KmWk2WC_Z0-unsplash.jpg",
    onLink:
      "https://unsplash.com/collections/8976018/randoms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    byLink:
      "https://unsplash.com/@algi93?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyTex",
    imgLinkText: "Al ghazali",
  },
];

const BlogPreviewSection = () => {
  return (
    <div className="bg-white flex flex-col items-center p-8" >
      <h1 className="lg:text-[80px] text-[40px] font-display uppercase" >LATEST FROM OUR BLOG</h1>
      <p className=" font-body text-center text-dark-text my-4 " > Quisque vulputate massa nec feugiat fringilla. Fusce at euismod augue. Maecenas quis leo id lectus vestibulum interdum. </p>
      <div className="my-8 flex flex-col items-center space-y-6 lg:grid lg:grid-cols-3 lg:gap-3 lg:h-[80vh]" >
      {PREVIEWDATA.map((data) => {
        return (
          <BlogPostPreview
            title={data.title}
            meta={data.meta}
            text={data.text}
            img={data.img}
            onLink={data.onLink}
            byLink={data.byLink}
            imgLinkText={data.imgLinkText}
          />
        );
      })}
      </div>
      <button
        type="button"
        className="font-semibold py-2 px-4 bg-orange-normal m-8 hover:bg-orange-hover hover:scale-110 transition duration-300 z-20 text-white "
      >
        READ MORE
      </button>
    </div>
  );
};

export default BlogPreviewSection;
