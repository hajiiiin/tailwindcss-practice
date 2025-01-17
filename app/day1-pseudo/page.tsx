"use client";

function main() {
  return (
    <div>
      <ul className="space-y-4 py-4">
        <li className="rounded-lg border p-4 first:bg-blue-100 first:font-bold last:bg-green-100 last:italic">
          첫번째
        </li>
        <li className="rounded-lg border p-4">두번째</li>
        <li className="rounded-lg border p-4 first:bg-blue-100 first:font-bold last:bg-green-100 last:italic">
          마지막
        </li>
      </ul>

      <div className="bg-gray-100 p-6">
        <h1>Modifier pseudo class: odd, even</h1>
        <ul className="space-y-3">
          <li className="rounded-lg p-4 odd:bg-blue-50 even:bg-black-50">
            Item 1
          </li>
          <li className="rounded-lg p-4 odd:bg-blue-50 even:bg-pink-50">
            Item 2
          </li>
          <li className="rounded-lg p-4 odd:bg-blue-50 even:bg-gray-50">
            Item 3
          </li>
          <li className="rounded-lg p-4 odd:bg-blue-50 even:bg-pink-50">
            Item 4
          </li>
        </ul>
      </div>

      <div className="space-y-4 bg-gray-100 p-6">
        <h1>Modifier pseudo class: Form State (required, invalid, disabled)</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name (required)
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full rounded-lg border p-2 required:border-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email (invalid if incorrect)
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-lg border p-2 invalid:border-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password (disabled)
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded-lg border p-2 disabled:cursor-not-allowed disabled:bg-gray-200"
            />
          </div>
        </form>
      </div>

      <div className="space-y-4">
        <div className="group border p-4 rounded-lg focus-within:border-blue-500">
          <label htmlFor="group-input" className="block text-sm">
            Focus the input below:
          </label>
          <input
            id="group-input"
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none"
          />
          <p className="text-sm text-gray-500 group-focus-within:text-blue-500">
            부모 요소가 활성화되었습니다!
          </p>
        </div>
      </div>
    </div>
  );
}

export default main;
