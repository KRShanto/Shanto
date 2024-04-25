import Car from "@/../public/car.svg";
import SectionTitle from "./SectionTitle";

export default function Story() {
  return (
    <div id="story">
      <div className="mt-48 flex flex-col items-center">
        <SectionTitle title="Journey | Where it all began" image={Car} />

        <p className="mt-16 max-w-3xl text-center text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sint
          debitis nam ex, delectus error nemo expedita iusto, facere, cumque
          totam. Vero aut rem blanditiis tempore doloremque corporis, laboriosam
          molestias. Magnam ipsa modi provident fugiat quasi sint. Numquam
          delectus suscipit ratione quae atque quasi maiores sit voluptatum
          alias quod! Reprehenderit, quo adipisci assumenda sint accusamus animi
          cum, ducimus, fugiat odit harum ex laboriosam laudantium tempora
          exercitationem hic. Expedita porro iusto impedit laudantium aliquam
          alias et totam unde. Ab mollitia fuga neque porro repellat cumque
          velit laudantium omnis veniam sed placeat voluptatum quidem quaerat
          cum quas maiores, accusantium laboriosam, sapiente expedita.
        </p>
      </div>
    </div>
  );
}
