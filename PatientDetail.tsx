import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import patients from './services/patients';
import diagnoses from './services/diagnoses';
import { Patient, Diagnosis } from './types';
import EntryDetails from './components/Entries';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function PatientDetail() {
  const { id } = useParams(); 
  const [patient, setPatient] = useState<Patient | null>(null);
  //const [diagnosis, setDiagnosis] = useState<Diagnosis[]>([]);


  useEffect(() => {
    if (id) {
    const fetchPatientData = async () => {
      try {
        const patientData = await patients.getPatientById(id);
        setPatient(patientData);

        //const diagnosesData = await diagnoses.getAllDiagnoses();
        //setDiagnosis(diagnosesData)
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchPatientData();
    }
  }, [id]);
  /*
  const findDiagnosisByCode = (code: string) => {
    return diagnosis.find((d) => d.code === code);
  };

  /*
  return (
    <div>
      {patient && (
        <div>
          <h2>{patient.name}</h2>
          <p>ssn: {patient.ssn}</p>
          <p>occupation: {patient.occupation}</p>
          <h3>entries</h3>
          {patient.entries.map((entry) => (
            <div key={entry.id}>
              <p>
                {entry.date} <span style={{ fontStyle: 'italic' }}>{entry.description}</span>
              </p>
              <ul>
                {entry.diagnosisCodes?.map((code) => {
                  const diagnosis = findDiagnosisByCode(code);
                  const diagnosisName = diagnosis ? diagnosis.name : 'Unknown Diagnosis';
                  return <li key={code}>{code}: {diagnosisName}</li>;
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );

*/

return (
  <div>
    {patient && (
      <div>
        <h2>{patient.name}</h2>
        <p>ssn: {patient.ssn}</p>
        <p>occupation: {patient.occupation}</p>
        <h3>entries</h3>
        {patient.entries.map((entry) => (
          <div key={entry.id}>
            <Card variant="outlined">
              <CardContent>
                <EntryDetails entry={entry} />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    )}
  </div>
);
}

export default PatientDetail;