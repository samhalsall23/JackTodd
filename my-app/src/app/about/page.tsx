// "use client";

import MyCarousel from "../components/MyCarousel";

export default function About() {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h1 style={{ marginTop: "20px" }}>About Me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam blanditiis
        recusandae veniam tenetur pariatur sunt itaque architecto fugit,
        doloremque alias, adipisci vel cumque suscipit beatae at inventore
        quisquam explicabo labore quae. Similique, in fugit, corporis iusto
        minus facere id dolor provident, consequuntur recusandae debitis dolore
        delectus accusantium omnis eveniet quae. Molestias enim perspiciatis
        neque unde esse fuga iste consequuntur praesentium deleniti blanditiis
        nesciunt error quasi ea similique, laborum dolor laboriosam doloribus
        omnis dolorem voluptate. At odio dolorum qui temporibus quasi dolore,
        iure repellendus numquam dolores fugiat debitis earum culpa autem
        possimus tempore incidunt provident error sed! Deleniti vero ipsa quasi!
      </p>
      <h1 style={{ marginTop: "28px", marginBottom: "20px" }}>
        View My Projects
      </h1>
      <MyCarousel />
    </div>
  );
}
