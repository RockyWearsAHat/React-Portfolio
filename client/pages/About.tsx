import { FC, ReactNode } from 'react';

import avatar from '../assets/avatar.jpeg';
import aboutBG from '../assets/aboutBG.jpg';

const About: FC = (): ReactNode => {
  return (
    <div className="flex flex-shrink flex-grow basis-auto flex-col items-center justify-center bg-emerald-950 text-white">
      <div className="absolute top-0 h-auto w-[100vw] overflow-hidden after:absolute after:h-[5px] after:w-[100vw] after:translate-y-[-5px] after:bg-emerald-800 after:content-['']">
        <img
          src={aboutBG}
          alt="backgroundImg"
          className="w-[100vw] scale-110 blur brightness-50"
        />
      </div>
      <div className="z-10 max-w-[80vw] pb-16 pt-10">
        <h1 className="text-2xl underline">About Me</h1>
        <img
          src={avatar}
          alt="Placeholder avatar"
          className="my-6 size-36 rounded-full object-cover"
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente at
          exercitationem, rerum voluptas eos dolore veritatis ipsum omnis iusto,
          soluta magnam fugit id voluptatum quae et eveniet, dolores minima.
          Quidem debitis iusto autem unde eligendi sequi expedita! Quam
          similique voluptatem ex explicabo. Doloribus a qui laudantium quod,
          officiis sapiente accusantium, minima eligendi magnam, dignissimos
          autem eaque eius sunt! Quisquam, dicta facere voluptatem aliquam unde
          expedita earum laudantium alias porro recusandae itaque quia eveniet
          ex nobis corporis, adipisci tempora! Ea, laborum natus aliquam dolorum
          architecto in sapiente animi ex nesciunt dolorem nostrum earum eaque
          similique laboriosam vitae. Deleniti quibusdam, tempora voluptatum
          perferendis sequi vel. Minima placeat deleniti earum nulla
          necessitatibus at doloremque libero excepturi illum magni aut
          molestias perspiciatis, delectus iure neque facere, possimus
          praesentium quidem, quasi dignissimos laborum itaque consectetur et!
          Voluptatem alias tempore minima dicta odio culpa commodi quod illum,
          nulla consequuntur quas veniam impedit, placeat praesentium labore
          debitis quisquam quo adipisci error obcaecati? Repudiandae sequi alias
          inventore sint corrupti possimus quos, error eius magni molestiae.
          Ipsam nostrum amet eos adipisci quia eum ipsum tempora in vero
          reprehenderit ullam laudantium, accusantium ipsa ratione et nihil
          fugiat, soluta ad nesciunt quaerat impedit ex? Laudantium in nam
          aliquam tempora repudiandae, officia itaque necessitatibus, vel
          exercitationem, maxime molestiae voluptatibus distinctio reprehenderit
          molestias deleniti ex non est rerum beatae mollitia quaerat asperiores
          reiciendis. Vero rerum dolore ex impedit sunt rem fugit optio ipsum
          illum aperiam voluptates dolorem fugiat incidunt facilis accusamus
          dolorum similique, et totam corporis! Assumenda corrupti suscipit
          veritatis culpa quo error unde dolores ducimus fugit accusamus odit
          dolore distinctio recusandae excepturi harum inventore aperiam est
          ipsum praesentium, at nesciunt eaque cumque in vel. Asperiores nulla,
          qui optio in iusto sunt expedita quia odit cupiditate dicta placeat
          corporis quasi saepe facilis veniam! Nostrum omnis reiciendis fuga
          accusamus enim voluptas repellat iste vitae mollitia facilis
          dignissimos laborum nemo error libero, rem, cupiditate necessitatibus,
          iure a vero magnam minima fugit repellendus animi. Quia placeat a,
          labore quisquam blanditiis error et impedit sunt voluptatem sequi amet
          inventore eos? At et placeat, quos optio, consectetur voluptatum ipsam
          a ea, veniam doloribus tempora. Consequatur blanditiis officia quis
          nulla exercitationem ipsa, nemo fuga eaque fugiat deleniti quasi illo,
          tenetur consequuntur. Beatae ratione laudantium odio natus cum, dolor
          laborum officia vero assumenda asperiores animi. Nisi qui velit
          molestias nesciunt laboriosam eos minima optio cumque, doloremque sint
          illo odio obcaecati veritatis fuga sunt ipsam possimus repellendus
          voluptas? Rem maxime illo saepe cum pariatur. Recusandae facilis
          impedit at magni pariatur possimus consequuntur quo a est esse non
          voluptatum eaque qui nisi, eveniet consectetur voluptatibus ab sequi
          ipsa molestiae tempore natus officiis optio totam. Fuga officia
          consequuntur ipsa voluptatem, sequi eligendi asperiores odit numquam
          cumque illum laudantium assumenda fugiat repellat ullam provident
          labore deleniti cum rerum illo sapiente quod nobis? Reiciendis natus
          repellat, est dolorum necessitatibus inventore repudiandae magni
          officia, quidem quasi, architecto rerum. Voluptates eum quod aperiam
          doloremque ipsum odit quaerat veritatis fugit voluptas quis placeat
          nobis distinctio qui repellat ea excepturi recusandae nesciunt,
          dignissimos fugiat aliquam ex eligendi est. Consectetur ducimus est
          dolores, in earum amet aut, nemo nesciunt temporibus dicta quia
          provident repellendus ratione consequuntur modi eius iusto architecto,
          suscipit sit eum. At iure explicabo repellendus recusandae dignissimos
          magnam maxime quibusdam voluptatibus itaque! Necessitatibus doloribus
          explicabo quo ex et, adipisci accusamus, hic velit dolor vitae
          possimus temporibus magni aliquam voluptas molestiae vero, repudiandae
          laboriosam.
        </p>
      </div>
    </div>
  );
};

export default About;
