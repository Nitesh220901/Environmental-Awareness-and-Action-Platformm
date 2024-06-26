import { useDispatch, useSelector } from "react-redux";
import { deleteAccount } from "../../Service/Operation/Setting";
import { useNavigate } from "react-router-dom";
const DeleteModal = ({ modalData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  console.log("Token", token);

  const deletHandler = () => {
    dispatch(deleteAccount(token, navigate));
  };
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-pink-600 bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-gray-900 bg-opacity-70 text-white p-6">
        <p className="text-2xl font-semibold text-richblack-5">
          {modalData?.text1}
        </p>
        <p className="mt-3 mb-5 leading-6 text-richblack-200">
          {modalData?.text2}
        </p>
        <div  className="flex items-center gap-x-4">
          <button onClick={deletHandler} className="py-2 px-3 rounded-lg bg-yellow-100 text-black font-bold">
            {modalData?.btn1Text}
          </button>

          <div
            className="cursor-pointer rounded-md text-black bg-gray-200 py-[8px] px-[20px] font-semibold text-richblack-900"
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
