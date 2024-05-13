export const NonSemanticForm = (props) => {
  const { handleClick, onKeyUp, provinces } = props;

  return (
    <form className="non-semantic-form" aria-labelledby="provinces-select">
      <h3 id="provinces-select">Select your preferred province(s)</h3>

      <fieldset title="Provinces" onClick={handleClick} onKeyUp={onKeyUp}>
        <div
          tabIndex={0}
          role="checkbox"
          aria-checked={provinces.ab}
          data-prov="ab"
        >
          Alberta
        </div>
        <div
          tabIndex={0}
          role="checkbox"
          aria-checked={provinces.bc}
          data-prov="bc"
        >
          British Columbia
        </div>
        <div
          tabIndex={0}
          role="checkbox"
          aria-checked={provinces.sk}
          data-prov="sk"
        >
          Saskatchewan
        </div>
        <div
          tabIndex={0}
          role="checkbox"
          aria-checked={provinces.mb}
          data-prov="mb"
        >
          Manitoba
        </div>
        <div
          tabIndex={0}
          role="checkbox"
          aria-checked={provinces.on}
          data-prov="on"
        >
          Ontario
        </div>
        <div
          tabIndex={0}
          role="checkbox"
          aria-checked={provinces.qc}
          data-prov="qc"
        >
          Quebec
        </div>
        <div
          tabIndex={0}
          role="checkbox"
          aria-checked={provinces.nb}
          data-prov="nb"
        >
          New Brunswick
        </div>
        <div
          tabIndex={0}
          role="checkbox"
          aria-checked={provinces.ns}
          data-prov="ns"
        >
          Nova Scotia
        </div>
        <div
          tabIndex={0}
          role="checkbox"
          aria-checked={provinces.pe}
          data-prov="pe"
        >
          Prince Edward Island
        </div>
        <div
          tabIndex={0}
          role="checkbox"
          aria-checked={provinces.nl}
          data-prov="nl"
        >
          Newfoundland and Labrador
        </div>
        <div
          tabIndex={0}
          role="checkbox"
          aria-checked={provinces.yt}
          data-prov="yt"
        >
          Yukon
        </div>
        <div
          tabIndex={0}
          role="checkbox"
          aria-checked={provinces.nt}
          data-prov="nt"
        >
          Northwest Territories
        </div>
        <div
          tabIndex={0}
          role="checkbox"
          aria-checked={provinces.nu}
          data-prov="nu"
        >
          Nunavut
        </div>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
};
