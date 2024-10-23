import Image from "next/image";
import { Button } from "../bottun";
import { IconArrowLeftFill } from "../icons/icons";

export const HomeHereoSection: React.FC = () => {
  return (
    <>
      <section className=" bg-hero-pattern bg-no-repeat mt-5 xl:mt-20 xl:bg-left">
        <div className=" container flex flex-col-reverse items-center xl:flex-row">
          <div className=" flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
            <h3 className=" text-xl dark:info xl:text-2xl">خوش اومدی به ...</h3>
            <h1 className=" text-3xk font-black gradient lg:text-5xl xl:text-5xl ">
              مسیر صعود به قله های برنامه نویسی
            </h1>
            <p>
              هرجای مسیر برنامه نویسی که باشی، با همراهی استادهای باتجربه کلاسبن
              می تونی بدون محدودیت به قله های بالاتر صعود کنی. ما همیشه هواتو
              داریم.
            </p>
            <div className=" mt-5 mb-3 flex gap-4 justify-center xl:justify-start">
              <Button variant="primary" size="large">
                دوره‌های ری‌اکت و نکست
                <IconArrowLeftFill fill="currentColor" />
              </Button>
              <Button variant="neutral" size="large">
                مشاوره برنامه نویسی
              </Button>
            </div>
            <Image
              src="/images/frameworks.png"
              className=" grayscale mt-4 opacity-70 m-auto xl:m-0"
              width={412}
              height={39}
              alt=""
            />
          </div>
          <Image
            src="/images/programmer-landing.svg"
            width={702}
            height={521}
            alt="classbon"
          />
        </div>
      </section>
      <div className=" container"></div>
    </>
  );
};
