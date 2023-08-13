export const Modal = ({ modal, handleModal, addToFave, value, onChange }) => {
  return (
    <div
      hidden={modal}
      className=" fixed top-0 bottom-0 left-0 right-0 bg-opacity-25  
      bg-[#5f5a5a08]"
    >
      <div className=" rounded-lg relative top-[40%] mx-8  md:top-[40%] md:left-[40%] border border-[2px] border-white bg-[#EFEFEF] bg-opacity-50 md:w-[30rem] h-[12rem] ">
        <div className="w-full flex justify-center font-semibold">
          <div>
            <p className="my-[1rem] font-extralight text-3xl text-center">
              What you wanna call it ?
            </p>
            <input
              value={value ? value : ''}
              onChange={onChange}
              className="w-[15rem]  mx-10 h-[2rem]"
              type="text"
            />

            <div className=" mt-[2rem] ">
              <div className="flex justify-around gap-3 w-[20rem] font-light">
                <button
                  onClick={() => {
                    addToFave();
                    handleModal();
                  }}
                  className="bg-white py-2 w-[10rem] transform hover:scale-95 transition-transform"
                >
                  Add to Favorite
                </button>
                <button
                  onClick={handleModal}
                  className="bg-white w-[10rem] transform hover:scale-95 transition-transform"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
