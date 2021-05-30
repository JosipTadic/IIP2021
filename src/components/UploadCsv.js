import React from 'react';
import {parse} from "papaparse";
import {Container, Card} from 'react-bootstrap';

const UploadCsv = ({setRows}) => {

    return(
        <Card style={{margin: '50px'}}>
        <Container primary

            onDragOver={(e) => {
              e.preventDefault();
            }}

            onDrop={(e) => {

                e.preventDefault();

                Array.from(e.dataTransfer.files)
                .forEach(async (file) => {
                  const text = await file.text();
                  const result = parse(text, { header: true });
                  console.log(text);
                  console.log(result);
                  setRows((existing) => [...existing, ...result.data]);
                });
            }}
        >
            <p>DROP YOUR CSV FILE HERE!</p>
          </Container>
          </Card>
    )
}

export default UploadCsv;