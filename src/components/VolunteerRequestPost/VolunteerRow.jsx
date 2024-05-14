import Swal from "sweetalert2";

const VolunteerRow = ({ vol }) => {
  const { _id } = vol;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b9a11-server-side-md-ashikur-rahman-ashik.vercel.app/newVolunteer/${_id}`,
          { credentials: "include" },
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Post has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <>
      <td>
        <div className="flex flex-col gap-2 lg:flex-row items-center md:gap-3">
          <div className="avatar hidden lg:block">
            <div className="mask mask-squircle w-12 h-12">
              <img src={vol.thumbnail} />
            </div>
          </div>
          <div>
            <div className="lg:font-bold text-center md:text-xl text-gray-400">
              {vol.postTitle}
            </div>
          </div>
        </div>
      </td>
      <td className="md:text-xl">{vol.categoryBox}</td>
      <td className="text-red-500 md:text-xl">{vol.date}</td>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm text-white hover:bg-red-500 bg-red-400"
        >
          Cancel
        </button>
      </th>
    </>
  );
};

export default VolunteerRow;
