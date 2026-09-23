import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = () => {
    const copyTask = [...task]
    copyTask.push({ title, details })
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white lg:flex">

      {/* LEFT - ADD NOTE */}
      <div className="w-full lg:w-2/5 p-6 sm:p-10 lg:p-14">

        <div className="max-w-xl mx-auto lg:mx-0">

          {/* Header */}
          <div className="mb-10">
            <p className="text-sm text-zinc-500 uppercase tracking-widest mb-2">
              Notes
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Add a new note
            </h1>

            <p className="text-zinc-500 mt-3">
              Capture your thoughts, ideas and important information.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={(e) => { e.preventDefault(); submitHandler(e) }} className="flex flex-col gap-5">

            {/* Heading */}
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                Note title
              </label>

              <input type="text" placeholder="Enter note heading..." className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl outline-none text-white placeholder:text-zinc-600 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }} />
            </div>

            {/* Details */}
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                Description
              </label>

              <textarea placeholder="Write your note here..." className="w-full h-44 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl outline-none resize-none text-white placeholder:text-zinc-600 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition"
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value)
                }}
              />
            </div>

            {/* Button */}
            <button className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-zinc-200 active:scale-[0.98] transition mt-2">
              + Add Note
            </button>

          </form>
        </div>
      </div>


      {/* RIGHT - RECENT NOTES */}
      <div className="w-full lg:w-3/5 border-t lg:border-t-0 lg:border-l border-zinc-800 p-6 sm:p-10 lg:p-14">

        <div className="h-full">

          {/* Header */}
          <div className="flex items-end justify-between mb-8">

            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-widest mb-2">
                Your collection
              </p>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Recent Notes
              </h1>
            </div>

            <span className="hidden sm:block text-sm text-zinc-500">
              {task.length} notes
            </span>

          </div>


          {/* Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 overflow-y-auto max-h-[70vh] pr-2">

            {task.map(function (elem, idx) {
              const deleteNote = (index) => {
                const copyTask = [...task]

                copyTask.splice(index, 1)

                setTask(copyTask)
              }
              return <div key={idx} className= " relative bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

                <button
                  onClick={() => deleteNote(idx)}
                  className="absolute top-3 right-3 text-zinc-500 hover:text-red-400 text-xl"
                >
                  ×
                </button>

                <h2 className="text-xl font-semibold mb-2">
                  {elem.title}
                </h2>

                <p className="text-zinc-400 text-sm">
                  {elem.details}
                </p>
              </div>
            })}

            {task.length === 0 && (
              <div className="col-span-full min-h-87.5 border border-dashed border-zinc-800 rounded-2xl flex flex-col items-center justify-center text-center p-6">

                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl mb-5">
                  📝
                </div>

                <h2 className="text-lg font-semibold text-zinc-300">
                  No notes yet
                </h2>

                <p className="text-sm text-zinc-600 mt-2 max-w-sm">
                  Your recently created notes will appear here.
                  Start by creating your first note.
                </p>

              </div>
            )}

          </div>
        </div>
      </div>

    </div>
  )
}

export default App