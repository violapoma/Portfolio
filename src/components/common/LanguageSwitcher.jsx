import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18n";
import { Form } from "react-bootstrap";

const lngs = {
  en: {nativeName: 'English'},
  it: {nativeName: 'Italiano'}
}; 

function LanguageSwitcher() {
    useTranslation();  //triggera il render 

    return (
    <Form.Select
      size="sm"
      value={i18n.resolvedLanguage}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="text-end border-0 cursorPointer"
      aria-label="Select language"
    >
      {Object.keys(lngs).map((lng) => (
        <option key={lng} value={lng}>
          {lngs[lng].nativeName}
        </option>
      ))}
    </Form.Select>
  );
}

export default LanguageSwitcher; 