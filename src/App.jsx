import CrossIcon from "./components/icons/CrossIcon"
import MoonIcon from "./components/icons/MoonIcon"

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-200 min-h-screen">

      <header className=" mx-auto pt-8 px-4 md-4 container">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
          <button>
            <MoonIcon/>
          </button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
          <span className="border-2 inline-block h-7 w-7 rounded-full flex-none"></span>
          <input 
            type="text" 
            placeholder="Create a new todo..."
            className="w-full text-gray-400 outline-none flex-none"
          ></input>
        </form>
      </header>

      <main className="container mx-auto px-4 mt-5">
        <div className="bg-white rounded-md">

          <article className="flex gap-4 py-4 border-b px-4">
            <button className="border-2 inline-block h-7 w-7 rounded-full"></button>
            <p className="text-gray-600 grow">Complete online JavaScript course</p>
            <button> <CrossIcon/> </button>
          </article>

          <article className="flex gap-4 py-4 border-b px-4">
            <button className="border-2 inline-block h-7 w-7 rounded-full"></button>
            <p className="text-gray-600 grow">Complete online JavaScript course</p>
            <button> <CrossIcon/> </button>
          </article>

          <article className="flex gap-4 py-4 border-b px-4">
            <button className="border-2 inline-block h-7 w-7 rounded-full"></button>
            <p className="text-gray-600 grow">Complete online JavaScript course</p>
            <button> <CrossIcon/> </button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>

        </div>
      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="bg-white p-4 flex justify-center rounded-md gap-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <section className="text-center mt-8 text-gray-400">Drag and drop to reorder list</section>

    </div>
  )
}

export default App