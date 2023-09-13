/** New Box Form
 *
 * State:
 * -formData
 *
 * Form Data:
 * -height
 * -width
 * -backgroundColor
 */

import { useState } from "react";
import { v4 as uuid } from "uuid";

function NewBoxForm({ createBox }) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const gatherInput = (e) => {
    e.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  };

  return (
    <div>
      <form onSubmit={gatherInput}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            id="height"
            name="height"
            type="text"
            value={formData.height}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            id="width"
            name="width"
            type="text"
            value={formData.width}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            id="backgroundColor"
            name="backgroundColor"
            type="text"
            value={formData.backgroundColor}
            onChange={handleChange}
          />
        </div>
        <button id="newBoxButton">Add a new box</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
