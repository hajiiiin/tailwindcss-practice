"use client";

function List() {
  return (
    <div>
      <ul role="list" className="">
        <li className="flex">
          <div className="flex">
            <img
              className=""
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="1"
            />
            <div className="">
              <p className="">Michael Foster</p>
              <p className="">michael.foster@example.com</p>
            </div>
          </div>
          <div className="">
            <p className="">Co-Founder / CTO</p>
            <p className="">
              Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
            </p>
          </div>
        </li>
        <li className="flex">
          <div className="flex">
            <img
              className=""
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="2"
            />
            <div className="">
              <p className="">Dries Vincent</p>
              <p className="">dries.vincent@example.com</p>
            </div>
          </div>
          <div className="">
            <p className="">Business Relations</p>
            <div className="">
              <div className="bg-emerald-500/20">
                <div className="bg-emerald-500"></div>
              </div>
              <p className="">Online</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default List;
