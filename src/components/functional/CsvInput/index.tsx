import CSVReader, { CSVReaderProps } from "react-csv-reader";

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
    <div>
      <CSVReader
        onFileLoaded={handleCsvFile}
        parserOptions={configs}
        accept=".csv , text/csv"
        label="Selecione um arquivo CSV"
      />
    </div>
  );
}

export default CsvToObjectConverter;
