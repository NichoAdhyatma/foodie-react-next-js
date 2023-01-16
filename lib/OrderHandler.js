export const createOrder = async ({ name, phone, address, total, paymentMethod }) => {
  const res = await fetch("/api/order", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      phone: phone,
      address: address,
      total: parseFloat(total),
      method: paymentMethod,
      status: 1,
    }),
  });

  const id = await res.json();
  return id;
};
