const Contact = () => {
  return <div>
    <h1 className="font-bold p-4 m-4 text-3xl">
      Welcome to contact us page!!!!
    </h1>
    <form>
      <input type="text"  className="border border-black p-2 m-2" placeholder="name"></input>
      <input type="text" className="border border-black p-2 m-2" placeholder="message"></input>
      <button className="border border-black p-2 m-2 bg-gray-100 rounded-xl">Submit</button>
    </form>
  </div>
}

export default Contact;