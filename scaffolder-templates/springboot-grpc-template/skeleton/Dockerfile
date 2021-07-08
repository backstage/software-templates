FROM openjdk:11-alpine
ENTRYPOINT ["/usr/bin/${{values.artifact_id}}.sh"]

COPY ${{values.artifact_id}}.sh /usr/bin/${{values.artifact_id}}.sh
COPY target/${{values.artifact_id}}.jar /usr/share/${{values.artifact_id}}/${{values.artifact_id}}.jar
