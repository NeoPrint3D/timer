function InfoCard(props) {
    const { color, title, text,image } = props;
    return (
      <div className={`p-2 lg:p-3 bg-${color}-800 rounded-3xl mb-5 place-items-center`}>
        <div
          className={`bg-${color}-600 text-center p-2 sm:p-3 lg:p-5 rounded-2xl  mx-auto text `}
        >
          <div className="flex justify-center p-2">
            <div className={`bg-${color}-100 p-1 rounded-2xl`}>
              <h1
                className={`sm:text-2xl text-sm text-bold rounded-2xl  px-3 sm:px-10 lg:px-24  p-1  md:px-16 bg-${color}-300 font font-bold text-sm`}
              >
                {title}
              </h1>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="flex place-items-center">
            <h3
              className={`sm:text-xl text-xs text-bold bg-${props.color}-200 rounded-3xl lg:px-10 p-1 sm:p-3 px-3 font-light text-justify`}
            >
              {text}
            </h3>
            </div>
            {image ? (<img className={`bg-${props.color}-300 p-0.5 rounded-full w-8 h-8 sm:w-16 sm:h-16` } src={image} alt=""></img>):(<></>)}
          </div>
        </div>
      </div>
    );
  }
export default InfoCard;  