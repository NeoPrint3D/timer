export default function InfoCard(props) {
    let { title, text, image, size } = props;
    let imground = "rounded-full";
    if (title === "Memes") {
      imground = "rounded-xl";
    }
  
    size = size || "text-xl";
    return (
      <div
        className={`yellow text-center p-2 sm:p-2 lg:p-4 rounded-2xl  mx-auto transparent  border-full`}
      >
        <div className="flex justify-evenly place-items-center">
          {title === "Memes" ? (
            <div>
              <img
                className={`bg-white ${imground} w-64 h-64`}
                src={image}
                alt=""
              ></img>
            </div>
          ) : (
            <div>
              <h1
                className={`bg-white sm:text-2xl text-bold rounded-2xl  px-3 sm:px-10 lg:px-24  p-3 sm:p-2 mb-2 md:px-14 font-bold text-sm `}
              >
                {title}
              </h1>
              <div className="flex place-items-center justify-evenly">
                <h3
                  className={`bg-white sm:${size} text-xs  rounded-3xl lg:px-10 p-1 sm:p-3 px-3  `}
                >
                  {text}
                </h3>
                {image ? (
                  <img
                    className={`bg-white p-0.5 ${imground} w-8 h-8 sm:w-16 sm:h-16 mx-3 `}
                    src={image}
                    alt=""
                  ></img>
                ) : (
                  <></>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }