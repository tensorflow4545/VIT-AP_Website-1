import * as React from "react";

function FacultySection(props) {
  return (
    <section className="bg-white flex flex-col px-20 max-md:px-5">
      <div className="self-center w-full max-w-[1224px] mt-16 mb-20 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col max-md:max-w-full max-md:mt-8">
              <div className="w-[648px] max-w-full self-end">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col mt-12 max-md:mt-10">
                    <h1 className="text-rose-950 text-5xl font-bold capitalize self-stretch whitespace-nowrap max-md:text-4xl">
                      Faculty
                    </h1>
                    <p className="text-stone-900 text-lg font-medium leading-6 self-stretch mt-4">
                      Our multidisciplinary faculty are leaders in research and teaching
                    </p>
                    <a
                      href="#"
                      className="text-rose-950 text-xl font-medium leading-7 self-stretch whitespace-nowrap w-full grow mt-7 pl-6 pr-7 py-4 border-[1.5px] border-solid border-rose-950 max-md:px-5"
                    >
                      Faculty Profiles
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/243af9d8-9005-4daf-a4df-aea6cc403f5e?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/243af9d8-9005-4daf-a4df-aea6cc403f5e?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/243af9d8-9005-4daf-a4df-aea6cc403f5e?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/243af9d8-9005-4daf-a4df-aea6cc403f5e?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/243af9d8-9005-4daf-a4df-aea6cc403f5e?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/243af9d8-9005-4daf-a4df-aea6cc403f5e?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/243af9d8-9005-4daf-a4df-aea6cc403f5e?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/243af9d8-9005-4daf-a4df-aea6cc403f5e?apiKey=86ab2603bef245f3a4fc444bffafe3d1&"className="aspect-square object-contain object-center w-full overflow-hidden grow max-md:mt-10"
                />
              </div>
            </div>
            <div className="w-[544px] max-w-full mt-7 self-end">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f51966-63d9-4464-a4f6-5199ac3cf26b?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5f51966-63d9-4464-a4f6-5199ac3cf26b?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5f51966-63d9-4464-a4f6-5199ac3cf26b?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5f51966-63d9-4464-a4f6-5199ac3cf26b?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5f51966-63d9-4464-a4f6-5199ac3cf26b?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5f51966-63d9-4464-a4f6-5199ac3cf26b?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5f51966-63d9-4464-a4f6-5199ac3cf26b?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5f51966-63d9-4464-a4f6-5199ac3cf26b?apiKey=86ab2603bef245f3a4fc444bffafe3d1&"className="aspect-square object-contain object-center w-full overflow-hidden flex-1 my-auto max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0c22f2c1-5ec7-4eef-bd11-5574fbfc55d8?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c22f2c1-5ec7-4eef-bd11-5574fbfc55d8?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c22f2c1-5ec7-4eef-bd11-5574fbfc55d8?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c22f2c1-5ec7-4eef-bd11-5574fbfc55d8?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c22f2c1-5ec7-4eef-bd11-5574fbfc55d8?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c22f2c1-5ec7-4eef-bd11-5574fbfc55d8?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c22f2c1-5ec7-4eef-bd11-5574fbfc55d8?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c22f2c1-5ec7-4eef-bd11-5574fbfc55d8?apiKey=86ab2603bef245f3a4fc444bffafe3d1&"className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                    />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9e7454-ccc0-4047-be68-9898433ca3b9?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e9e7454-ccc0-4047-be68-9898433ca3b9?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e9e7454-ccc0-4047-be68-9898433ca3b9?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e9e7454-ccc0-4047-be68-9898433ca3b9?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e9e7454-ccc0-4047-be68-9898433ca3b9?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e9e7454-ccc0-4047-be68-9898433ca3b9?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e9e7454-ccc0-4047-be68-9898433ca3b9?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e9e7454-ccc0-4047-be68-9898433ca3b9?apiKey=86ab2603bef245f3a4fc444bffafe3d1&"className="aspect-square object-contain object-center w-full overflow-hidden self-stretch grow mt-7"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f3331096-9d28-42bb-9e86-22d73a98d4f8?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3331096-9d28-42bb-9e86-22d73a98d4f8?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3331096-9d28-42bb-9e86-22d73a98d4f8?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3331096-9d28-42bb-9e86-22d73a98d4f8?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3331096-9d28-42bb-9e86-22d73a98d4f8?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3331096-9d28-42bb-9e86-22d73a98d4f8?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3331096-9d28-42bb-9e86-22d73a98d4f8?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3331096-9d28-42bb-9e86-22d73a98d4f8?apiKey=86ab2603bef245f3a4fc444bffafe3d1&"className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/be637b7b-e58e-488b-b7e8-c19f2685a864?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/be637b7b-e58e-488b-b7e8-c19f2685a864?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be637b7b-e58e-488b-b7e8-c19f2685a864?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/be637b7b-e58e-488b-b7e8-c19f2685a864?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/be637b7b-e58e-488b-b7e8-c19f2685a864?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be637b7b-e58e-488b-b7e8-c19f2685a864?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/be637b7b-e58e-488b-b7e8-c19f2685a864?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/be637b7b-e58e-488b-b7e8-c19f2685a864?apiKey=86ab2603bef245f3a4fc444bffafe3d1&"className="aspect-square object-contain object-center w-full overflow-hidden self-stretch grow mt-9"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1ba93dfb-bd79-428b-bbcc-2154f4402d39?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ba93dfb-bd79-428b-bbcc-2154f4402d39?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ba93dfb-bd79-428b-bbcc-2154f4402d39?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ba93dfb-bd79-428b-bbcc-2154f4402d39?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ba93dfb-bd79-428b-bbcc-2154f4402d39?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ba93dfb-bd79-428b-bbcc-2154f4402d39?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ba93dfb-bd79-428b-bbcc-2154f4402d39?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ba93dfb-bd79-428b-bbcc-2154f4402d39?apiKey=86ab2603bef245f3a4fc444bffafe3d1&"className="aspect-square object-contain object-center w-64 overflow-hidden max-w-full my-auto max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FacultySection ;