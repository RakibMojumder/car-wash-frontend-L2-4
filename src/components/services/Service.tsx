import serviceImage from "@/assets/images/service-image.webp";

const Service = () => {
  return (
    <div className="bg-white">
      <div>
        <img src={serviceImage} alt="" />
      </div>
      <div>
        <h3>Consultation</h3>
        <p>One-on-one consultation for 1 hour</p>
        <p>35</p>
        <p>40</p>
      </div>
    </div>
  );
};

export default Service;
