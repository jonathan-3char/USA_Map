import Link from "next/link";

const About = () => {
  return (
    <section className="w-full p-10"> 
      <div className="m-auto max-w-3xl w-full text-center">
        <h2 className="block text-3xl text-neutral-700 dark:text-amber-100">
            How to Play
          </h2>
          <p className="text-neutral-700 dark:text-amber-100">
            You will be given two states and you must click on the states that create the shortest path to the other state.
          </p>
          <div className="h-12">

          </div>
          <h2 className="text-3xl text-neutral-700 dark:text-amber-100">
            Key Colors
          </h2>
          <div className="w-600 inline-block overflow-auto ">
            <div className="flex-col">
              <div className="flex w-550 mb-4">
                <div className="bg-emerald-300 w-10 h-10 mr-10 "></div>
                <div className="flex-1 break-words text-left text-neutral-700 align-middle dark:text-amber-100">
                  The state selected is part of the most optimal path
                </div>
              </div>

              <div className="flex w-550 mb-4">
                <div className="bg-orange-400 w-10 h-10 mr-10 "></div>
                <p className="w-400 break-words text-left text-neutral-700 dark:text-amber-100">
                  The state selected is a close guess but not part of the optimal path
                </p>
              </div>

              <div className="flex w-550">
                <div className="bg-red-600 w-10 h-10 mr-10 "></div>
                <p className="w-400 break-words text-left text-neutral-700 dark:text-amber-100">
                  The state selected not close to the optional path
                </p>
              </div>
            </div>
          </div>
    <Link
      className="rounded-lg bg-blue-900 text-neutral-200 hover:bg-blue-800 font-bold px-4 py-2"
      href="./.."
    >
    Go Back
    </Link>
      </div>
    </section>
  )
}

export default About;
