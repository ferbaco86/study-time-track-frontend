/* eslint-disable jsx-a11y/label-has-associated-control */
const AddSession = () => {
return(
  <form>
    <label htmlFor="title">Title</label>
    <input id="title" type="text" placeholder="Session Title" value="title" />
    <button type="button" onClick={addSession}>Add</button>
  </form>
)};

export default AddSession;
