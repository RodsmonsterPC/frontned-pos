import { submitOrder } from "@/actions/submit-order-action";
import { useStore } from "@/src/store";
import React, { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

const SubmitOrderForm = () => {

    const total = useStore(state => state.total)
    const coupon = useStore(state => state.coupon.name)
    const contents = useStore(state => state.contents)
    const clearOrder = useStore(state => state.clearOrder)
    const order = {
        total,
        coupon,
        contents
    }

    const submitOrderWithData = submitOrder.bind(null, order)
    const [state, dispatch] = useActionState(submitOrderWithData, {
        errors: [],
        success: ""
    })

    useEffect(() => {
        if(state.errors){
            state.errors.forEach(error => toast.error(error))
        }
        if(state.success){
            toast.success(state.success)
            clearOrder()
        }
    }, [state])

  return (
    <form
    action={dispatch}>
      <input
        type="submit"
        className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer uppercase font-bold p-3"
        value="Confirmar Compra"
      />
    </form>
  );
};

export default SubmitOrderForm;
