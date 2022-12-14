// To write on a topic
kafka-console-producer --broker-list localhost:9092 --topic test-topic

// Get list of topics
kafka-topics --bootstrap-server localhost:9092 --list

// Listen to a channel
kafka-console-consumer --bootstrap-server localhost:9092 --topic test-topic

// Delete a Topic
kafka-topics --bootstrap-server localhost:9092 --topic TicketCreated --delete