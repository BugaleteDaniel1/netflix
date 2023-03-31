import PlansCss from "../styles/Plans.module.css";
import { useProductsData } from "../../firebase";
import { useUserCheckout } from "../../firebase";
import { useActiveSub } from "../../firebase";
import { useEffect, useState } from "react";
export const Plans = () => {
  const [sub, setSub] = useState(null);
  const products = useProductsData();

  const loadCheckout = async (priceId) => {
    useUserCheckout(priceId);
  };
  const data = useActiveSub();
  useEffect(() => {
    setSub(data);
  }, [data]);

  return (
    <section>
      {sub && (
        <p className={PlansCss.renewal}>
          Active Until:{" "}
          {sub && new Date(sub.subEnd * 1000).toLocaleDateString("sv")}
        </p>
      )}

      {products?.map(({ priceId, productData }) => {
        const isCurrent = productData.name.toLowerCase().includes(sub?.role);
        return (
          <div key={priceId} className={PlansCss.plan}>
            <div className={PlansCss.info}>
              <div className={PlansCss.wrapper}>
                <div>
                  <p>{productData.name}</p>
                  <p className={PlansCss.desc}>{productData.description}</p>
                </div>
                <button
                  disabled={isCurrent}
                  className={`${PlansCss.btn} ${isCurrent && PlansCss.active}`}
                  onClick={() => loadCheckout(priceId)}
                >
                  {productData.name.toLowerCase().includes(sub?.role)
                    ? "active"
                    : "subscribe"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
