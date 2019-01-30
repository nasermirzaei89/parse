package function

import "encoding/json"

// Request structure
type Request struct {
	Master         bool        `json:"master"`
	User           interface{} `json:"user"`
	InstallationID string      `json:"installationId"`
	Params         interface{} `json:"params"`
	FunctionName   string      `json:"functionName"`
}

// Response structure
type Response struct {
	Success interface{} `json:"success"`
}

// Error structure
type Error struct {
	Error interface{} `json:"error"`
}

// Handle a serverless request
func Handle(request []byte) string {
	var req Request
	err := json.Unmarshal(request, &req)
	if err != nil {
		res := Error{Error: err}
		b, _ := json.Marshal(&res)
		return string(b)
	}
	res := Response{Success: "pong"}
	b, _ := json.Marshal(&res)
	return string(b)
}
