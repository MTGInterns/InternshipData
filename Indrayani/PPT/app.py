import torch
from transformers import BertTokenizer, BertModel

# 1. Load tokenizer + bert backbone
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased", cache_dir="./bert_cache")
bert_model = BertModel.from_pretrained("bert-base-uncased", cache_dir="./bert_cache")

# 2. Define SpamClassifier class again (copy the same class you wrote in notebook)
class SpamClassifier(torch.nn.Module):
    def __init__(self, bert_model):
        super(SpamClassifier, self).__init__()
        self.bert = bert_model
        self.dropout = torch.nn.Dropout(0.3)
        self.fc = torch.nn.Linear(768, 2)  # 2 classes: spam or ham

    def forward(self, input_ids, attention_mask):
        outputs = self.bert(input_ids=input_ids, attention_mask=attention_mask)
        pooled_output = outputs.pooler_output
        x = self.dropout(pooled_output)
        x = self.fc(x)
        return x

# 3. Create model and load weights
model = SpamClassifier(bert_model)
model.load_state_dict(torch.load("spam_model.pth", map_location=torch.device("cpu")))
model.eval()
