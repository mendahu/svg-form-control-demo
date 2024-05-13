export const SemanticForm = () => {
  return (
    <form aria-labelledby="provinces-select">
      <h3 id="provinces-select">Select your preferred province(s)</h3>
      <label>
        <input value="ab" type="checkbox" readOnly />
        Alberta
      </label>
      <label>
        <input value="bc" type="checkbox" readOnly />
        British Columbia
      </label>
      <label>
        <input value="sk" type="checkbox" readOnly />
        Saskatchewan
      </label>
      <label>
        <input value="mb" type="checkbox" readOnly />
        Manitoba
      </label>
      <label>
        <input value="on" type="checkbox" readOnly />
        Ontario
      </label>
      <label>
        <input value="qc" type="checkbox" readOnly />
        Quebec
      </label>
      <label>
        <input value="nb" type="checkbox" readOnly />
        New Brunswick
      </label>
      <label>
        <input value="ns" type="checkbox" readOnly />
        Nova Scotia
      </label>
      <label>
        <input value="pe" type="checkbox" readOnly />
        Prince Edward Island
      </label>
      <label>
        <input value="nl" type="checkbox" readOnly />
        Newfoundland and Labrador
      </label>
      <label>
        <input value="yt" type="checkbox" readOnly />
        Yukon
      </label>
      <label>
        <input value="nt" type="checkbox" readOnly />
        Northwest Territories
      </label>
      <label>
        <input value="nu" type="checkbox" readOnly />
        Nunavut
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
