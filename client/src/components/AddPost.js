const styles = { label: 'mr-4' }

const AddPost = () => {
  return (
    <div className="m-auto mt-3 mb-3 text-center h-fit p-3 border-solid border-verzisor border-4 flex-col max-sm:h-fit">
      <div>
        <label className="mr-4 text-4xl w-fit max-sm:text-xl">Title</label>
        <textarea
          className="w-full h-auto text-4xl "
          cols="1"
          rows="1"
          wrap="hard"
        ></textarea>
      </div>
      <div>
        <label className="text-4xl max-sm:text-xl max-[280px]:hidden">
          Descriere
        </label>
      </div>
      <textarea
        className="w-full h-auto text-xl"
        cols="60"
        rows="8"
        wrap="hard"
      ></textarea>
    </div>
  )
}
export default AddPost
