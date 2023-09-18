import { Entry, HospitalEntry, OccupationalHealthcareEntry, HealthCheckEntry } from "../types";

const HospitalEntryComponent: React.FC<{ entry: HospitalEntry }> = ({ entry }) => {
    return (
      <div>
        <p>{entry.date}</p>
        <p><span style={{ fontStyle: 'italic' }}>{entry.description}</span></p>       
        <p>Diagnose by: {entry.specialist}</p>
      </div>
    );
  };
  
  const OccupationalHealthcareEntryComponent: React.FC<{ entry: OccupationalHealthcareEntry }> = ({ entry }) => {
    return (
      <div>
        <p>{entry.date} {entry.employerName}</p>
        <p><span style={{ fontStyle: 'italic' }}>{entry.description}</span></p>
        {entry.sickLeave && (
          <p>
            Sick Leave: {entry.sickLeave.startDate} - {entry.sickLeave.endDate}
          </p>
        )}
        <p>Diagnose by: {entry.specialist}</p>
      </div>
    );
  };
  
  const HealthCheckEntryComponent: React.FC<{ entry: HealthCheckEntry }> = ({ entry }) => {
    return (
      <div>
        <p>{entry.date}</p>
        <p><span style={{ fontStyle: 'italic' }}>{entry.description}</span></p>
        <p>Health Check Rating: {entry.healthCheckRating}</p>
        <p>Diagnose by: {entry.specialist}</p>
      </div>
    );
  };

  const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
    switch (entry.type) {
        case 'Hospital':
            return <HospitalEntryComponent entry={entry as HospitalEntry} />;
        case 'OccupationalHealthcare':
            return <OccupationalHealthcareEntryComponent entry={entry as OccupationalHealthcareEntry} />
        case 'HealthCheck':
            return <HealthCheckEntryComponent entry={entry as HealthCheckEntry} />
        default:
            return null;
    } 
  };

  export default EntryDetails;