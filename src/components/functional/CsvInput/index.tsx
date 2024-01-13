import CSVReader, { CSVReaderProps } from "react-csv-reader";
import "./style.css";
type CsvData<T = string> = {
  [key: string]: T;
};

interface Props {
  isValid: (data) => boolean;
  parseData: (data) => CsvData[];
  onSuccess: (data) => void;
  onError: (err: string) => void;
}

function CsvToObjectConverter(props: Props) {
  const { onSuccess, onError, isValid, parseData } = props;
  const configs = {
    header: false,
    skipEmptyLines: true,
  };
  const handleCsvFile: CSVReaderProps["onFileLoaded"] = (data) => {
    if (!data || data.length === 0) {
      onError("Arquivo vazio");
      return;
    }

    if (isValid(data)) {
      const csvData = parseData(data);
      if (csvData && csvData.length > 0) {
        onSuccess(csvData);
        return;
      }
    }

    onError("Erro ao converter arquivo");
  };

  return (
    <div className="">
      <label
        htmlFor="csv-input"
        className="text-sm p-2 bg-slate-200  rounded-md cursor-pointer transition-all ease-in-out duration-300 hover:bg-slate-300 hover:shadow-md"
      >
        Selecione um arquivo CSV
        <CSVReader
          inputId="csv-input"
          onFileLoaded={handleCsvFile}
          parserOptions={configs}
          accept=".csv , text/csv"
        />
      </label>
    </div>
  );
}

export default CsvToObjectConverter;
